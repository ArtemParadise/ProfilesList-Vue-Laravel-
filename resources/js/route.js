let routes = require('./routes.json');


/// route('home', [1])
export default function () {
    let args = Array.prototype.slice.call(arguments);
    let name = args.shift();

    if (routes[name] === undefined) {
        console.log('error');
    } else {
        return '/' + routes[name].split('/',).map( function (str) {
            if (str[0] == '{') {
                console.log('Iteration end :', args);
                return args.shift();
            } else {
                console.log('Iteration :', str);
                return str;
            }
        }).join('/');
    }
}
