import './TitleCardDefault.css';

const TitleCardDefault = ({ title, icon }) => {
    return (
        <h1 className="main-title">
            {icon}
            {title}
        </h1>
    )
}

export default TitleCardDefault