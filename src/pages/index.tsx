import { useTranslation } from 'next-i18next';

import { useGetTeamQuery } from '@/api/getTeamData';
import LatestNews from '@/components/home/latestNews';
import MatchSchedule from '@/components/home/matchSchedule';
import NewsBanner from '@/components/home/newsBanner';

const Index = () => {
  const { data: newsData } = useGetTeamQuery({ teamId: 8456, tab: 'news' });
  const { data: fixturesData } = useGetTeamQuery({
    teamId: 8456,
    tab: 'fixtures',
  });
  const { t } = useTranslation('common');

  return (
    // <Main meta={<Meta title="Home" description="Welcome home" />}>
    <div className="m-auto flex w-full max-w-[1280px] flex-col ">
      <NewsBanner
        news={newsData?.data?.news?.data[0]}
        header={t('FIRST TEAM NEWS')}
      />
      <MatchSchedule
        matchList={fixturesData?.data?.fixturesTab?.allFixtures}
        teamId={8456}
      />
      <LatestNews newsList={newsData?.data?.news?.data} teamId={8456} />
      <div className="h-[400px]" />
    </div>
    // </Main>
  );
};

export default Index;
