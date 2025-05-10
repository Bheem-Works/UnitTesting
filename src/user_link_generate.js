function url(user) {
    return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}

console.log(url('vim'));
console.log(url('medus'));