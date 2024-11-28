import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _tasks, _posts, _timeline } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsNews } from '../analytics-news';
import { AnalyticsTasks } from '../analytics-tasks';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={2.4}>
          <AnalyticsWidgetSummary
            title="Greet Customer"
            percent={2.6}
            total={4.5}
            color="info"
            icon={
              <img alt="icon" src="https://img.icons8.com/?size=96&id=HLJKvAzU3QNP&format=png" />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [22, 8, 35, 50, 82, 84, 77, 12],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <AnalyticsWidgetSummary
            title="Process Knowledge"
            percent={-0.1}
            total={3.3}
            color="warning"
            icon={
              <img alt="icon" src="https://img.icons8.com/?size=96&id=xZyT82NiKyCA&format=png" />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <AnalyticsWidgetSummary
            title="Maintain Call Control"
            percent={2.8}
            total={3.7}
            color="error"
            icon={
              <img alt="icon" src="https://img.icons8.com/?size=96&id=WMy0gZYpVaBU&format=png" />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <AnalyticsWidgetSummary
            title="Problem Solved"
            percent={3.6}
            total={3.6}
            icon={
              <img alt="icon" src="https://img.icons8.com/?size=96&id=7rhmsi5Z2nlq&format=png" />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>
        <Grid xs={12} sm={6} md={2.4}>
          <AnalyticsWidgetSummary
            title="Positive Ending"
            percent={2.1}
            total={3.9}
            color="success"
            icon={
              <img alt="icon" src="https://img.icons8.com/?size=96&id=4I61hx0IZQtS&format=png" />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits
            title="Total Calls"
            chart={{
              series: [
                { label: 'Agent 1', value: 500 },
                { label: 'Agent 2', value: 300 },
                { label: 'Agent 3', value: 1500 },
                { label: 'Agent 4', value: 700 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsWebsiteVisits
            title="Agent Calls and Ratings"
            subheader="Agent performance based on call ratings"
            chart={{
              categories: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'],
              series: [
                { name: 'Greet Customer', data: [4.66, 2.13, 3.91, 0.76, 2.55] },
                { name: 'Process Knowledge', data: [0.75, 2.44, 2.84, 0.1, 3.5] },
                { name: 'Maintain Call Control', data: [3.8, 4.76, 3.85, 4.58, 3.45] },
                { name: 'Problem Solved', data: [0.31, 1.67, 1.68, 1.37, 2.34] },
                { name: 'Positive Ending', data: [4.21, 4.73, 3.28, 4.26, 3.54] },
              ],
            }}
          />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
