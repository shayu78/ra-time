import React from 'react';
import moment from 'moment';
import "moment/locale/ru";

export default function DateTimePretty(Component) {
  return class extends React.Component {
    render() {
      return <Component date={moment(this.props.date).fromNow()} />;
    }
  };
}
