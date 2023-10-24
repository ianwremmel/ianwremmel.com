import cx from 'classnames';
import {useMemo} from 'react';

export interface PublicationDateProps {
  className?: string;
  timestamp: Date | string;
}

export const PublicationDate = ({
  className,
  timestamp
}: PublicationDateProps) => {
  const date = useMemo(() => new Date(timestamp), [timestamp]);

  return (
    <time
      className={cx('publication-date', className)}
      dateTime={date.toISOString()}
    >
      <div className="publication-date__wrapper">
        <span className="publication-date__date_and_month">
          {date.toLocaleString('default', {
            day: 'numeric',
            month: 'long'
          })}
        </span>
        <span className="publication-date__year">
          {date.toLocaleString('default', {
            year: 'numeric'
          })}
        </span>
      </div>
    </time>
  );
};
