import innet from 'innet';

function to(type) {
    return (target, parent, plugins, plugin) => {
        target.type = type;
        innet(target, parent, plugins, plugin);
    };
}

export default to;
