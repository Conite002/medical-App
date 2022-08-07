var config =  {
    svg : {
        fill : "white",
    },
    form : {
        stroke : "black",
        fill : "white",
        strokeOpacity : "1",
        strokeWidth : "1.5pt",
        fillOpacity : "1"
    },
  
    box : {
        stroke : "black",
        strokeWidth : "1px",
        fill : "none",
        strokeDasharray : "4"
    },

    point : {
        fill  : "black",
        strokeWidth : "1pt",
        radius : 3,
    },

    line : {
        fill : "black",
        ends : {
            left : { type : "losange", props : {x1 : 10 , y1 : 10 , x2 : 10, y2 : 10}},
            right : { type : "triangle", props : {x1 : 10 , y1 : 10 , x2 : 10, y2 : 10, x3 : 20, y3 : 30}}
        }
    }
}

export {config};