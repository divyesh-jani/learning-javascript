// Given absolute unix-style path for a file, return the simplified path
// Examples: '/home/' => '/home' ; '/a/./b/../../c/' => '/c' => '//a/' => '/a'
// '.' refers to current directory, '..' refers to directory up a level
// Path should always start with '/' and never end with '/'

function simplifyPath(unixpath) {
    let directories = unixpath.split('/');
    let pathStack = [];
    for (let path of directories) {
        if (path === '' || path === '.') {
            continue;
        } else if (path === '..') {
            pathStack.pop();
        } else {
            pathStack.push(path);
        }
    }
    return '/' + pathStack.join('/');
}

console.log(simplifyPath('/home/'));                    // /home
console.log(simplifyPath('/a/./b/../../c/'));           // /c
console.log(simplifyPath('//a/'));                      // /a
console.log(simplifyPath('/../'));                      // /
console.log(simplifyPath('/home//foo/'));               // /home/foo
console.log(simplifyPath('/home/../'));                 // /
console.log(simplifyPath('/home//.///bar/.//foo/..'));  // /home/bar
