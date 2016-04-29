/**
 * Created by bugbear on 16/4/28.
 */
import React, {Component, PropTypes} from 'react'
import style from './index.scss';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FontIcon from 'material-ui/lib/font-icon';
import CardText from 'material-ui/lib/card/card-text';

export default class Pcard extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    const { pande, actions } = this.props;
    return (
      <div>
        <div className={style.item}>
          <Card>
            <CardHeader
              title='文章'
              subtitle='试与🐟🐟方'
              avatar={<FontIcon className="muidocs-icon-action-home" />}
            />
            <CardMedia
              overlay={<CardTitle title='Overlay title' subtitle='Overlay subtitle' />}
            >
              <div className={style.cardp}> aaa</div>
            </CardMedia>
            <CardText>
              生活不止眼前的苟且.
            </CardText>
          </Card>
        </div>
        <div className={style.item}>
          <Card>
            <CardHeader
              title='文章'
              subtitle='试与🐟🐟方'
              avatar={<FontIcon className="muidocs-icon-action-home" />}
            />
            <CardMedia>
              <div className={style.cardp}> aaa</div>
            </CardMedia>
            <CardText>
              生活不止眼前的苟且.
            </CardText>
          </Card>
        </div>
      </div>
    )
  }
}