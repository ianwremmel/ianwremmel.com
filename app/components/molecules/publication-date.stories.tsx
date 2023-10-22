import {PublicationDate} from './publication-date';

export default {
  component: PublicationDate,
  title: 'Publication Date'
};

export const FromISOString = () => (
  <PublicationDate timestamp={new Date('2021-01-01').toISOString()} />
);

export const FromDateObject = () => (
  <PublicationDate timestamp={new Date('2021-01-01')} />
);

export const FromIncompleteString = () => (
  <PublicationDate timestamp={'2021-01-01'} />
);

export const VariousMonths = () => (
  <>
    <PublicationDate timestamp={'2021-01-01'} />
    <PublicationDate timestamp={'2021-02-01'} />
    <PublicationDate timestamp={'2021-03-01'} />
    <PublicationDate timestamp={'2021-04-01'} />
    <PublicationDate timestamp={'2021-05-01'} />
    <PublicationDate timestamp={'2021-06-01'} />
    <PublicationDate timestamp={'2021-07-01'} />
    <PublicationDate timestamp={'2021-08-01'} />
    <PublicationDate timestamp={'2021-09-01'} />
    <PublicationDate timestamp={'2021-10-01'} />
    <PublicationDate timestamp={'2021-11-01'} />
    <PublicationDate timestamp={'2021-12-01'} />
  </>
);
