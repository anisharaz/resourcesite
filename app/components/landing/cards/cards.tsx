import Card from "../card/card";
import web from "../assets/web.jpeg"
import ai from "../assets/ai.jpeg"
import ds from "../assets/ds.jpeg"
import Sse from "../assets/Sse.jpeg"
import ml from "../assets/ml.jpeg"

export default function(){
    return(
        <div className="md:grid grid-cols-2 gap-4 lg:grid-cols-3">
            <Card image={web} courseName="CSE General" note="" path="/branch_view"/>
            <Card image={ai} courseName="CSE AI" note="Comming soon..." path="#"/>
            <Card image={ds} courseName="CSE DS" note="Comming soon..." path="#"/>
            <Card image={Sse} courseName="CSE SE" note="Comming soon..." path="#"/>
            <Card image={ml} courseName="CSE AI-ML" note="Comming soon..." path="#"/>
        </div>
    )
}