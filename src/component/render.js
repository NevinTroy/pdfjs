import React from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
// import * as pdfjsLib from 'pdfjs-dist/webpack';

const url = "./test.pdf";
GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js-dist@2.15.268/build/pdf.worker.js';

class Render extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pdfDoc: null,
            currentPage: 1,
            isRendering: false,
            pageaPeding: null,
            scale: 1.5,
        };
    }

    componentDidMount() {
        this.getPDF();
    }

    getPDF = () => {
        var loadPDF = getDocument(url).promise.then(doc => {
            this.setState({pdfdoc: doc});
            console.log(this.state.pdfDoc);
        });
    }
    renderPage = (number) => {

    }
    
    render(){
        return(
            <>
                <div>bitch</div>
            </>
        )
    }

}

export default Render;