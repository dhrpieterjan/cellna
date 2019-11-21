import "./container.scss";

const Container = props => (
    <div style={{ backgroundColor: props.color, minHeight: props.minHeight }}>
        <div className="Container">{props.children}</div>
    </div>
);

export default Container;
