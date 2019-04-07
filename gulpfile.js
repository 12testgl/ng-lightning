const gulp = require('gulp');
const pug = require('gulp-pug');
const data = require('gulp-data');
const changed = require('gulp-changed');
const del = require('del');
const pkg = require('./projects/ng-lightning/package.json');

const pugSrc = [
  'projects/ng-lightning/src/lib',
  'src',
].map(path => `${path}/**/[^_]*.pug`);

gulp.task('pug:clean', function libCleanHtml () {
  return del(pugSrc.map(path => path.replace('.pug', '.html')));
});

gulp.task('pug:watch', function libWatchdHtml() {
  const watchSrc = pugSrc.map(path => path.replace('[^_]', ''));
  gulp.watch(watchSrc, gulp.series('pug:compile'));
});

gulp.task('pug:compile', function libBuildHtml() {

  const Prism = require('prismjs');
  require('prismjs/components/')(['typescript']);
  require('prismjs/components/')(['json']);

  const path = require('path');
  const fs = require('fs');
  const _pug = require('pug');
  const glob = require('glob');
  const md = require('markdown-it')({ breaks: true });
  const mdHtml = require('markdown-it')({
    html: true,    // Enable HTML tags in source
    breaks: true,  // Convert '\n' in paragraphs into <br>
  });

  function safe(string) {
    const replaceChars = { '{': `{{ '{' }}`, '}': `{{ '}' }}` };
    return string.replace(/{|}/g, function (match) { return replaceChars[match]; });
  }

  function highlightTS(src) {
    return safe(Prism.highlight(`${src}`, Prism.languages.typescript));
  }

  function highlightExample(filepath) {
    // Typescript
    const tsRaw = fs.readFileSync(`${filepath}.ts`, 'UTF-8');
    const ts = highlightTS(tsRaw);

    // HTML
    const pugSrc = _pug.renderFile(`${filepath}.pug`, { pretty: true, doctype: 'html' });
    const html = Prism.highlight(`${pugSrc}`.trim(), Prism.languages.markup);

    return { ts, tsRaw: `${encodeURIComponent(tsRaw)}`, html, htmlRaw: `${encodeURIComponent(pugSrc)}` };
  }

  return gulp.src(pugSrc, { base: './' })
    .pipe(changed('./', { extension: '.html' }))
    .pipe(data(function(file) {
      // Intro
      if (file.path.endsWith('get-started.component.pug')) {
        const directory = path.dirname(file.path);

        const docs = {};
        [
          { file: 'install', lang: 'clike' },
          { file: 'usage', lang: 'typescript' },
          { file: 'styles', lang: 'json' },
          { file: 'config', lang: 'typescript' },
        ].forEach(({file, lang}) => {
          const src = fs.readFileSync(`${directory}/${file}.md`, 'UTF-8');
          const md = src;
          docs[file] = lang === 'typescript' ? highlightTS(md) : Prism.highlight(`${md}`, Prism.languages[lang]);
        });
        return { ...docs };
      }

      // Demo component
      const examplesDirectory = path.dirname(file.path) + '/examples';
      if (fs.existsSync(examplesDirectory)) {
        const dir = path.basename(path.dirname(file.path));
        const metadata = require(path.dirname(file.path) + '/metadata.json');

        // Docs
        const docsDir = path.dirname(file.path) + '/docs';
        const readme = mdHtml.render(fs.readFileSync(`${docsDir}/README.md`, 'UTF-8'));
        const api = md.render(fs.readFileSync(`${docsDir}/API.md`, 'UTF-8'));

        const examples = glob.sync('**.pug', { cwd: examplesDirectory }).map((file) => {
          const id = file.replace('.pug', '');
          return { id, ...highlightExample(examplesDirectory + '/' + id) };
        });

        return { dir, examples, metadata, readme: safe(readme), api: safe(api) };
      }

      // index.pug
      if (file.path.endsWith('index.pug')) {
        const getComponents = source => fs.readdirSync(source)
          .filter(name => fs.lstatSync(path.join(source, name)).isDirectory());

        return { components: getComponents('src/app/components').join(', ') };
      }
    }))
    .pipe(pug({
      doctype: 'html',
      self: true,
      pretty: true,
      locals: {
        now: +new Date(),
        version: pkg.version,
      },
    }).on('error', function (err) { console.log(err); }))
    .pipe(gulp.dest('./'))
});

gulp.task('prepublish', function prepublish_impl() {
  return gulp.src(['*.md', 'LICENSE'])
    .pipe(gulp.dest('dist/ng-lightning'));
});

gulp.task('pug', gulp.series('pug:clean', 'pug:compile'));
