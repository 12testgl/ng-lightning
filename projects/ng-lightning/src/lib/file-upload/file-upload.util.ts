export function isFileTypeAccepted(accept: string | string[], file: File) {
  if (typeof accept === 'string') {
    accept = accept.split(',');
  }

  return accept.some((acc) => {
    return (new RegExp(acc.replace('*', '.\*'))).test(file.type);
  });
}
