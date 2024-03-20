import { clockSVG, correctAnswSVG, flagSVG } from "../../../assets/SVGS";
import StatusDashBlock from "./StatusDashBlock";

const statusBlocksData = [
  {
    name: "Quiz Passed",
    number: 21,
    icon: flagSVG,
  },
  {
    name: "Total Time",
    number: 90,
    icon: clockSVG,
  },
  {
    name: "Correct Answers",
    number: 290,
    icon: correctAnswSVG,
  },
];

const DashStats = () => {
  return (
    <div className="dashboard_top_stats">
      {statusBlocksData.map((block, index) => {
        return (
          <StatusDashBlock
            key={index}
            statusName={block.name}
            number={block.number}
            icon={block.icon}
          />
        );
      })}
    </div>
  );
};

export default DashStats;
