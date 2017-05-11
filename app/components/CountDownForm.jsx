var React = require('react');

var CountDownForm = React.createClass({
   onFormSubmit: function (e) {
      e.preventDefault();
      var strSeconds = this.refs.seconds.value;

      if (strSeconds.length > 0 && strSeconds.match(/^[0-9]*$/)){
         var intSeconds = parseInt(strSeconds, 10);
         this.refs.seconds.value = '';
         this.props.onSetCountDown(intSeconds > 3600 ? 3600 : intSeconds);
      }
   },
   render: function() {
      return (
         <div>
            <form ref="form" onSubmit={this.onFormSubmit} className="countdown-form">
               <input type="text" ref="seconds" placeholder="Enter time in seconds" />
               <button className="button expanded">Start</button>
            </form>
         </div>
      );
   }

});

module.exports = CountDownForm;
