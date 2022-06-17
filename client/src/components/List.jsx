import 'components/styles/List.scss';
import Assignment from "components/Assignment";
import ListItem from "components/Assignment/ListItem";

const List = (props) => {
  const viewName = () => {
    const views = props.view.replace(/([A-Z])/g, ' $1').trim();
    return views[0].toUpperCase() + views.substring(1);
  };

  return (
    <section className='list__view' onClick={props.closePopup}>
      <h1> {viewName()} Assignments </h1>
      <article className='assignment__show'>
        <ul className='ul-view'>

          {props.assignmentList.map((assignment) => (
            <li key={assignment.id} className={`card-li ${props.view}`} >
              {!props.admin && < Assignment
                {...assignment}
                view={props.view}
                onStart={() => { props.updateStatus(assignment.assigned.id, { dateStarted: new Date() }); }}
                onComplete={() => { props.updateStatus(assignment.assigned.id, { dateCompleted: new Date() }); }}
                onCancelStarted={() => { props.updateStatus(assignment.assigned.id, { dateStarted: null }); }}
                onCancelComplete={() => { props.updateStatus(assignment.assigned.id, { dateCompleted: null }); }}
              />}

              {props.admin &&
                <div className='admin_list'>
                  <ListItem {...props} {...assignment} />
                </div>}

            </li>)
          )}
        </ul>
      </article>
    </section>

  );
};

export default List;




