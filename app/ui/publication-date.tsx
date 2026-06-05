import type {Handle} from 'remix/ui';

export interface PublicationDateProps {
  className?: string;
  timestamp: Date | string;
}

export function PublicationDate(handle: Handle<PublicationDateProps>) {
  return () => {
    const {className, timestamp} = handle.props;
    const date = new Date(timestamp);

    return (
      <time
        className={['publication-date', className].filter(Boolean).join(' ')}
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
}
