import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { TFunction } from 'next-i18next';

export const translateLongDateToKorean = (dateString: string) => {
  const date = dayjs(dateString).locale('ko');
  return date.format('YYYY년 MMMM ddd dddd');
};

export const translateShortDateToKorean = (dateString: string) => {
  if (dateString === 'Today') {
    return '오늘';
  }

  const date = dayjs(dateString.trim());

  if (date.month >= dayjs().month) {
    date.set('year', dayjs().get('year'));
  } else {
    date.set('year', dayjs().add(1, 'y').get('year'));
  }

  return date.locale('ko').format('MMMM D일, dddd');
};

export function translateLate(late: string, t: TFunction) {
  let newLate = late;
  if (late.includes('1 month ago')) {
    newLate = newLate.replace('1 month ago', t('1 month ago'));
  }
  if (late.includes('months ago')) {
    newLate = newLate.replace(' months ago', t('months ago'));
  }
  if (late.includes('1 day ago')) {
    newLate = newLate.replace('1 day ago', t('1 day ago'));
  }
  if (late.includes('days ago')) {
    newLate = newLate.replace(' days ago', t('days ago'));
  }
  if (late.includes('hour ago')) {
    newLate = newLate.replace(' hour ago', t('hour ago'));
  }
  if (late.includes('hours ago')) {
    newLate = newLate.replace(' hours ago', t('hours ago'));
  }
  if (late.includes('minutes ago')) {
    newLate = newLate.replace(' minutes ago', t('minutes ago'));
  }
  if (late.includes('about')) {
    newLate = newLate.replace('about ', '');
  }
  return newLate;
}
