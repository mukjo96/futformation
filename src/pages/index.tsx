import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRecoilValue } from 'recoil';

import { useGetTeamQuery } from '@/api/getTeamData';
import LatestNews from '@/components/home/latestNews';
import MatchSchedule from '@/components/home/matchSchedule';
import NewsBanner from '@/components/home/newsBanner';
import PlayerStats from '@/components/home/playerStats';
import TeamPlayers from '@/components/home/teamPlayers';
import { teamState } from '@/store/team';

const Index = () => {
  const team = useRecoilValue(teamState);
  const { teamId } = team;

  const { data: newsData } = useGetTeamQuery({
    teamId,
    tab: 'news',
  });
  const { data: fixturesData } = useGetTeamQuery({
    teamId,
    tab: 'fixtures',
  });
  const { data: squadData } = useGetTeamQuery({
    teamId,
    tab: 'squad',
  });
  const { data: statData } = useGetTeamQuery({
    teamId,
    tab: 'overview',
  });

  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>FUTFORMATION football information website</title>
      </Head>
      <div className="m-auto flex w-full max-w-[1280px] flex-col ">
        <NewsBanner
          news={newsData?.news?.data[0]}
          header={t('FIRST TEAM NEWS')}
        />
        <MatchSchedule
          matchList={fixturesData?.fixtures?.allFixtures}
          teamId={teamId}
        />
        <LatestNews newsList={newsData?.news?.data} teamId={teamId} />
        <TeamPlayers players={squadData?.squad} />
        <PlayerStats statList={[statData?.topPlayers, statData?.table]} />
        <div className="h-[100px]" />
      </div>
    </>
  );
};

export default Index;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
