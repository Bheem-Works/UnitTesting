    export function who_likes(names) {
        if(names.length === 0) {
            return `No one likes `;
        } else if(names.length === 1) {
            return `${names[0]} likes it `;
        } else if(names.length === 2) {
            return `${names[0]} ${names[1]} likes it`;
        } else if(names.length === 3) {
            return `${names[0]} ${names[1]} ${names[2]} likes it`
        } else {
            return `${names[0]} ${names[1]} ${names.length - 2} and two more likes it `;
        }
    }

    console.log(who_likes([]));
    console.log(who_likes(['bhim','miso']));
    console.log(who_likes(['bhim','thom','thoman','sujata']));