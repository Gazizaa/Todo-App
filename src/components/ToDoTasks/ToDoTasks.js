import './style.css'
import deleteIcon from '../../delete.png'

const ToDoTasks = (props) => {
    return (
        <>
            <div className="task-item" id="content" >
                    {
                      props.lists.map(item => (
                          <div className="row">
                              <p key={item.id}>{item.task}</p> 
                              <button className="deleteBtn" onClick={() => {props.deleteTask(item.id)}}>
                                  <img src={deleteIcon} alt="delete-button"/>
                              </button>
                          </div>
                      ))
                    } 
            </div> 
        </>
    )
}

export default ToDoTasks
