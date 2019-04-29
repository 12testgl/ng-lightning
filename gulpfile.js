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
  const md = require('markdown-it')({ breaks: true });
  const mdHtml = require('markdown-it')({
    html: true,    // Enable HTML tags in source
    breaks: true,  // Convert '\n' in paragraphs into <br>
  });

  function safe(string) {
    const replaceChars = { '{': `{{ '{' }}`, '}': `{{ '}' }}` };
    return string.replace(/{|}/g, function (match) { return replaceChars[match]; });
  }

  function highlightTS(src, language = 'typescript') {
    return safe(Prism.highlight(`${src}`, Prism.languages[language]));
  }

  function highlightExample(filepath) {
    // Typescript
    const tsRaw = fs.readFileSync(`${filepath}.ts`, 'UTF-8');
    const ts = highlightTS(tsRaw);

    // HTML
    const pugSrc = _pug.renderFile(`${filepath}.pug`, { pretty: true, doctype: 'html' });
    const html = Prism.highlight(`${pugSrc}`.trim(), Prism.languages.markup);

    // Readme
    let readme = null;
    const readmeFile = `${filepath}.md`;
    if (fs.existsSync(readmeFile)) {
      readme = safe(mdHtml.render(fs.readFileSync(readmeFile, 'UTF-8')));
    }

    return { ts, tsRaw: `${encodeURIComponent(tsRaw)}`, html, htmlRaw: `${encodeURIComponent(pugSrc)}`, readme };
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
          { file: 'usage', lang: 'typescript', safe: true },
          { file: 'styles', lang: 'json' },
          { file: 'icons', lang: 'json', safe: true },
          { file: 'config', lang: 'typescript', safe: true },
        ].forEach(({file, lang, safe}) => {
          const src = fs.readFileSync(`${directory}/${file}.md`, 'UTF-8');
          const md = src;
          docs[file] = safe ? highlightTS(md, lang) : Prism.highlight(`${md}`, Prism.languages[lang]);
        });
        return { ...docs };
      }

      // Demo component
      const metadataFile = path.dirname(file.path) + '/metadata.json';
      if (fs.existsSync(metadataFile)) {
        const dir = path.basename(path.dirname(file.path));
        const metadata = require(metadataFile);

        // Docs
        const docsDir = path.dirname(file.path) + '/docs';
        const readme = mdHtml.render(fs.readFileSync(`${docsDir}/README.md`, 'UTF-8'));
        const api = md.render(fs.readFileSync(`${docsDir}/API.md`, 'UTF-8'));

        const examplesDirectory = path.dirname(file.path) + '/examples';
        const examples = Object.keys(metadata.examples).map((id) => {
          return { id, ...highlightExample(examplesDirectory + '/' + id) };
        });

        const lds = 'lds' in metadata ? metadata.lds : dir;
        const src = metadata.src || dir;
        const title = metadata.title || dir.replace(/-/g, ' ');

        return { dir, examples, metadata, readme: safe(readme), api: safe(api), title, lds, src };
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
