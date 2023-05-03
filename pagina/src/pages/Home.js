import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Editor from "../components/Editor";
import Consola from "../components/Consola";
import { Dialog } from 'primereact/dialog';
import Graph from "../components/Reportes/GraphAst";

import axios from "axios";

function Home(){
    const [editor, setEditor] = useState("");
    const [consola, setConsola] = useState("");
    const [visible, setVisible] = useState(false);
    const [dot, setDot] = useState("");

    const interpretar = async () => {
        console.log("ejecutando")
        try {
            setConsola("ejecutando...");
            if(editor ==""){
                setConsola("No hay codigo para interpretar");
                console.log("No hay codigo para interpretar");
            }else {
                console.log(editor)
                const response = await axios.post('http://localhost:5000/interpreter/interpretar', {code:editor});
                console.log(response.data);
                const {consola,errores,ast} = response.data;   
                console.log(consola);
                console.log("ast: "+ast);
                setDot(ast);
                setConsola(consola);
            }
        } catch (error) {
            console.log(error);
            setConsola("Error en el servidor");
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Editor</h1>
                </Col>
                <Col>
                    <h1>Consola</h1>
                </Col>

            </Row>
            <Row>
                <Col style={{ textAlign: 'left' }}>
                <Editor input={setEditor} value={editor} />
                </Col>
                
                <Col style={{ textAlign: 'left' }}>
                    <Consola consola={consola}/>
                </Col>
              
            </Row>
            {/*seccion de botones */}
            <Row>
                <Col>
                    <Button variant="outline-secondary" onClick={() =>interpretar()} >Run</Button>{' '}
                    <Button variant="outline-secondary" onClick={() =>setVisible(true)} >AST</Button>{' '}
                </Col>
            </Row>

            <Dialog header = "AST" visible ={visible} style ={{width: '50vw'}} onHide ={() => setVisible(false)}>
                <Graph dot={dot}/>
            </Dialog>

        </Container>
    );
}

export default Home;