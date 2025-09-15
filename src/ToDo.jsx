export default function ToDo({ task, isDone, time = 0 }) {
    return (
        <li
            style={{
                backgroundColor: '#f0f0f0',
                padding: '10px',
                borderRadius: '8px',
                marginBottom: '8px',
                color: isDone ? 'green' : 'red'
            }}
        >
            {
                isDone ? `Done : ${task} and Time: ${time} hours` : `Not Done:${task}`
            }
        </li>
    );
}
