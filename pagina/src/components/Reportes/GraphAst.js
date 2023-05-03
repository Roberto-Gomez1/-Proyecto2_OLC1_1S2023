import React, {useEffect} from "react";
import Graphviz from 'graphviz-react';
function Graph({dot}){
    return <Graphviz dot={dot} />;
};
export default Graph; 