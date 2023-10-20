const basePath = process.env.NEXT_BASEPATH;

/**
 * Prepend a given path with the Next.JS basePath
 */
function addBasePath(path: string): string {
  return [basePath || '', '/', path].join('/').replace(/\/+/g, '/');
}

export default addBasePath;
