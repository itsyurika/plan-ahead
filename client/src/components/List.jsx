import 'components/styles/List.scss';
import Assignment from "components/Assignment";
import AdminList from "components/Assignment/AdminList"

const List = (props) => {

  const viewName = () => {
    const views = props.view.replace(/([A-Z])/g, ' $1').trim()
    return views[0].toUpperCase() + views.substring(1)
  };


  return (
    <section className='list__view'>
      <h1> {viewName()} Assignments </h1>
      <article className='assignment__show'>
        <ul className='ul-view'>

          {props.assignmentList.map((assignment) => {

          return (

           <li className={`card-li ${viewName}`} key={assignment.id} > {!props.admin && < Assignment
            {...assignment }
            view={props.view}
            onStart={() => { props.updateSubmission(assignment.assigned.id, { dateStarted: new Date() }); }}
            onComplete={() => { props.updateSubmission(assignment.assigned.id, { dateCompleted: new Date() }); }}
            onCancelStarted={() => { props.updateSubmission(assignment.assigned.id, { dateStarted: null }); }}
            onCancelComplete={() => { props.updateSubmission(assignment.assigned.id, { dateCompleted: null }); }}
          />}

              {props.admin &&
                <div className='admin_list'>
                <AdminList {...props} {...assignment} />
                </div>
              }

          </li>)})}


        </ul>
        </article>
    </section>

  );
};

export default List;




