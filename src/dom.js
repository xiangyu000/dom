window.dom={};
dom.create=function(string){
    const container = document.createElement("template");
    container.innerHTML=string.trim();
    return container.content.firstChild;
};
dom.after=function(node,node2){   
     node.parentNode.insertBefore(node2,node.nextSibling);
};
dom.before=function(node,node2){
    Node.parentNode.insertBefore(node2,node);
};
dom.append=function(parent,node){
    parent.appendChild(node);
};
dom.wrap=function(node,parent){
    dom.before(node,parent);
    dom.append(parent,node);
};
dom.remove=function(node){
    node.parentNode.removeChild(node);
    return node;
};
dom.empty=function(node){
    const {childNodes}=node;
    //相当于const childNodes=node.childNodes;
    const array=[];
    // for(let i=0;i<childNodes.length;i++){
    //     dom.remove(childNodes[i]);
    //     array.push(childNodes[i]);
    // }
    // //node.length会随着节点变化而改变
    let x=node.firstChild;
    while(x){
        array.push(dom.remove(node.firstChild));
        x=node.firstChild;
    }
    return array;
};
dom.attr=function(node,name,value){
    if(arguments.length===3){
        node.setAttribute(name,value);
    }else if(arguments.length===2){
        return node.getAttribute(name);
    }
};
dom.text=function(node,string){
    if(arguments.length===2){
        if('innerText' in node){
            node.innerText=string;
        }else{
            node.textContent=string;
        }
    }else if(arguments.length===1){
        if('innerText' in node){
            return node.innerText;
        }else{
            return node.textContent;
        }
    }
};
dom.html=function(node,string){
    if(arguments.length===2){
        node.innerHTML=string;
    }else if(arguments.length===1){
        return node.innerHTML;
    }
}
dom.style=function(node,name,value){
    if(arguments.length===3){
        node.style[name]=value;
    }else if(arguments.length===2){
        if(typeof name==='string'){
            return node.style[name];
        }else if(name instanceof Object){
            const object=name;
            for(let key in object){
                node.style[key]=object[key];
            }
        }
    }
}
dom.class={
    add(node,className){
        node.classList.add(className);
    },
    remove(node,className){
        node.classList.remove(className);
    },
    has(node,className){
        return node.classList.contains(className);
    }
}
dom.on=function(node,eventName,fn){
    node.addEventListener(eventName,fn);
}
dom.off=function(node,eventName,fn){
    node.removeEventListener(eventName,fn);
}
dom.find=function(selector,scope){
    return (scope||document).querySelectorAll(selector);
}
dom.parent=function(node){
    return node.parentNode;
}
dom.children=function(node){
    return node.children;
}
dom.siblings=function(node){
    return Array.from(node.parentNode.children).filter(n=>n!==node);
}
dom.next=function(node){
    let x=node.nextSibling;
    while(x && x.nodeType===3){
        x=x.nextSibling;
    };
    return x;
}
dom.previous=function(node){
    let x=node.previousSibling;
    while(x && x.nodeType===3){
        x=x.previousSibling;
    };
    return x;
}
dom.each=function(nodeList,fn){
    for(let i=0;i<nodeList.length;i++){
        fn.call(null,nodeList[i]);
    }
}
dom.index=function(node){
    const list=dom.children(node.parentNode);
    let i;
    for(i=0;i<list.length;i++){
        if(list[i]===node){break}
    }
        return i;
    
}