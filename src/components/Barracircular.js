import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


<ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
    {percentage => (
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
    )}<CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
        })}
/>


<Example label="Custom animation speed">
      <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransitionDuration: 0.15
            })}
          />
        )}
      </ChangingProgressProvider>
    </Example>