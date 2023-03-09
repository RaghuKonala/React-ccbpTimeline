import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
    }
    return <ProjectTimelineCard key={eachItem.id} projectDetails={eachItem} />
  }

  return (
    <div className="app-container">
      <div className="app-responsive-container">
        <div className="app-heading-container">
          <h1 className="app-heading">
            MY JOURNEY OF <br />
            <span className="app-heading-span">CCBP 4.0</span>
          </h1>
        </div>

        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{secondary: 'white'}}
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
