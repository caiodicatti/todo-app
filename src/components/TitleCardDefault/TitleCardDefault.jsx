import './TitleCardDefault.css';

const TitleCardDefault = ({ title, icon }) => {
    return (
        <h1 className="main-title my-4">
            {icon}
            {title}
        </h1>
    )
}

export default TitleCardDefault