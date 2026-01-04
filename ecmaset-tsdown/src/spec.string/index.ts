export function sliceByStartSlash<T>(p: T) {
  if (typeof p === 'string') {
    const a = p.split('/');
    a.splice(0, 1);
    const t = a.join('/');
    return t;
  }
  return p;
}

// take it to heart: api 不熟练的产物
function sliceByEndSlashTITH<T>(p: T) {
  if (typeof p === 'string') {
    const a = p.split('/').reverse();
    a.splice(0, 1);
    const t = a.reverse().join('/');
    return t;
  }
  return p;
}

export function sliceByEndSlash<T>(p: T) {
  if (typeof p === 'string') {
    const a = p.split('/');
    a.splice(-1, 1);
    const t = a.join('/');
    return t;
  }
  return p;
}
