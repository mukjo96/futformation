import { Fragment } from 'react';

import { useTranslation } from 'next-i18next';

import { useGetTeamQuery } from '@/api/getTeamData';
import NewsBanner from '@/components/home/newsBanner';
import MatchSchedule from '@/components/home/matchSchedule';

const Index = () => {
  const { data: newsData } = useGetTeamQuery({ teamId: 8456, tab: 'news' });
  const { data: fixturesData } = useGetTeamQuery({
    teamId: 8456,
    tab: 'fixtures',
  });
  const { t } = useTranslation('common');

  return (
    // <Main meta={<Meta title="Home" description="Welcome home" />}>
    <Fragment>
      <NewsBanner
        news={newsData?.data?.news?.data[0]}
        header={t('FIRST TEAM NEWS')}
      />
      <MatchSchedule
        matchList={fixturesData?.data?.fixturesTab?.allFixtures}
        teamId={8456}
      />
      <div className="h-[400px]" />
    </Fragment>
    // </Main>
  );
};

export default Index;
