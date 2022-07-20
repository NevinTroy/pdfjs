import React from "react";
import { getDocument, GlobalWorkerOptions,} from "pdfjs-dist";

const test = require('pdfjs-dist/build/pdf.worker.entry.js');

const url = "./pdf.pdf";
GlobalWorkerOptions.workerSrc = '../../node_modules/pdfjs-dist/build/pdf.worker.js';
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
        getDocument(url).promise.then(doc => {
            this.setState({pdfdoc: doc});
            doc.getPage(1).then(page => {
                var scale = 1;
		        var viewport = page.getViewport(scale);
                // var canvas = <canvas/>
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext);
            })
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
                <canvas></canvas>
            </>
        )
    }

}

export default Render;