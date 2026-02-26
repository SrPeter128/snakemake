'use strict';

class RuleGraph_dagviz extends React.Component {
    constructor(props) {
        super(props);
        this.renderSVG = this.renderSVG.bind(this);
    }

    render() {
        // Das Element "rulegraph" enthält ein Kind-DIV "svg-renderer",
        // in das der SVG-Code eingebettet wird.
        return e(
            "div",
            { id: "rulegraph_dagviz", className: "max-h-screen py-2" },
            ("div", { id: "rulegraph_dagviz" })
        );
    }

    componentDidMount() {
        // Direktes Rendern der SVG-Zeichenkette, die über die Props übergeben wird
        this.renderSVG(this.props.svgString);
    }

    /**
     * Rendert die übergebene SVG-Zeichenkette in das Element mit der ID "svg-renderer".
     *
     * @param {string} svgString - Die SVG-Zeichenkette, die angezeigt werden soll.
     */
    renderSVG(svgString) {
        const svgContainer = document.getElementById("rulegraph_dagviz");
        if (svgContainer) {
            svgContainer.innerHTML = svgString;
        } else {
            console.error("SVG container not found!");
        }
    }
}

RuleGraph_dagviz.propTypes = {
    svgString: PropTypes.string.isRequired
};
