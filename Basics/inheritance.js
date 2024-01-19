let o = {};
o.x = 1;
let p = inherit(o);
p.y = 2;
let q = inherit(p);
q.z = 3;
q.x + q.y; // => 3


let unitCircle = { r:1 };
let c = inherit(unitCircle);
c.x = 1; c.y = 1;
c.r = 2; // override inherited property
unitCircle.r; // => 1 and not 2