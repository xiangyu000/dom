const div = dom.create("<table><td>hello</td></table>");
console.log(div);
dom.after(test, div);
// const nodes=dom.empty(window.empty);
// console.log(nodes);
dom.attr(test, 'title', 'hot');
const title = dom.attr(test, 'title');
dom.style(test, {
    border: '1px solid red',
    color: 'blue'
});
dom.class.add(test, 'red');
dom.class.add(test, "blue");
dom.class.remove(test, 'blue');
console.log(dom.class.has(test, 'blue'));
const fn1 = ()=>{
    alert("click!");
};
dom.on(test, "mouseover", fn1);
dom.off(test, 'mouseover', fn1);
const test2 = dom.find('#purple')[0];
console.log(dom.find('.red', test2)[0]);
const test3 = dom.find("#s3")[0];
console.log(test3.parentNode);
const test4 = dom.siblings(test3)[3];
console.log(dom.previous(test4));
const t = dom.find('#travel')[0];
dom.each(dom.children(t), (n)=>dom.style(n, 'color', '#eeeeee')
);
const t3 = dom.find('#t1')[0];
console.log(dom.index(t3));

//# sourceMappingURL=index.65c7a1e5.js.map
