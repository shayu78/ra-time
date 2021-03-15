import moment from 'moment';
import "moment/locale/ru";

export default function DateTimePretty(Component) {
  return function (props) {
    return <Component date={moment(props.date).fromNow()} />
  }
}
