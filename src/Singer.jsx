export default function Singer({ singer }) {
    return <li style={{
        backgroundColor: '#f0f0f0',
        padding: '10px',
        borderRadius: '8px',
        marginBottom: '8px'
    }}> Name : {singer.name}  Age: {singer.age} </li>
}