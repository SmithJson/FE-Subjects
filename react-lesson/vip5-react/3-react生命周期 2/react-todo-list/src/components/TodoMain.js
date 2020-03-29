import React from 'react';
import TodoItem from './TodoItem';
export default  class TodoMain extends React.Component{
    constructor(props){
        super(props);
        this.state = {
 
        };
    }
    componentDidMount(){
 
    }
    // 在初始化的时候不会立马执行 会在component接收到新的状态props的时候被触发 
    // 一般用于父组件更新的时候 子组件的重新渲染
    // 在react中 不是根据数据内容来判断的 而是根据数据的引用来判断的 
    componentWillReceiveProps(nextProps){
        console.log(nextProps.todos);
        console.log(this.props.todos);
        
    }
    render() {
         if(this.props.todos.length == 0){
             return(
                 <div className="todo-empty">恭喜您，目前没有待办事项！</div>
             )
         }else{
             return (
                 <ul className="todo-main">
                     {
                         this.props.todos.map((todo, index) => {
                             return <TodoItem text={todo.text} isDone={todo.isDone} index = {index} {...this.props} key={index} />
                         })
                     }
                     <li className="item">
                         <label>
                           <span><strong>{this.props.todoCount}</strong>总数/<strong>{this.props.todoDoneCount}</strong>已完成</span>
                         </label>
                     </li>
                 </ul>
             )
         }
    }
}