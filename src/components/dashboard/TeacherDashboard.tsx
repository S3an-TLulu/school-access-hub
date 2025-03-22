
import { TeacherStatsCards } from './teacher/TeacherStatsCards';
import { TeacherClassPerformance } from './teacher/TeacherClassPerformance';
import { TeacherSchedule } from './teacher/TeacherSchedule';
import { TeacherCommunications } from './teacher/TeacherCommunications';
import { TeacherTasks } from './teacher/TeacherTasks';

export const TeacherDashboard = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your classes and students
        </p>
      </div>

      <TeacherStatsCards />

      <div className="grid gap-4 md:grid-cols-7">
        <TeacherClassPerformance />
        <TeacherSchedule />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <TeacherCommunications />
        <TeacherTasks />
      </div>
    </div>
  );
};
