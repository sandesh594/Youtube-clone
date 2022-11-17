import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
  return (
    <div className='recommendedvideos'>
      <h2>Recommended Videos</h2>
      <div className='recommendedvideos_videos'>
        <VideoCard
        title={'RCB IPL'}
        views={'2.3m Views'}
        timestamp={'3 DAYS AGO'}
        channelImage={'https://gumlet.assettype.com/swarajya%2F2020-09%2Ff2ce0bfa-f66e-4a9b-8e89-8d8d4bcc8cac%2Frcb.jpg?format=auto'}
        channel={'RCB'}
        image={'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/iz2kn4xqncudofej_1646730567.jpeg'}
         />

        <VideoCard
        title={'KKR IPL'}
        views={'2m Views'}
        timestamp={'15 DAYS AGO'}
        channelImage={'https://www.dailypioneer.com/uploads/2022/story/images/big/kkr-gear-up-for-ipl--start-training-2022-03-14.jpg'}
        channel={'KKR'}
        image={'https://english.cdn.zeenews.com/sites/default/files/2022/02/14/1014471-kkrsquadipl.jpg'}
         />
        <VideoCard
        title={'SRH IPL'}
        views={'2.2m Views'}
        timestamp={'2 DAYS AGO'}
        channelImage={'https://myipl.fun/wp-content/uploads/2020/05/srh-sunrisers-hyderabad.jpg'}
        channel={'SRH'}
        image={'https://crictips.com/wp-content/uploads/2022/04/Sunrisers-Hyderabad-1.jpg'}
         />
         <VideoCard
        title={'MI IPL'}
        views={'1.2m Views'}
        timestamp={'12 DAYS AGO'}
        channelImage={'https://thecricketlounge.com/static/c1e/client/99591/migrated_original/e887a81959a66337b7ccc7835c38470e.jpg'}
        channel={'MI'}
        image={'https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/04/Mumbai-Indians-1.webp?fit=1200%2C800&ssl=1'}
         />
          <VideoCard
        title={'DC IPL'}
        views={'1.2m Views'}
        timestamp={'12 DAYS AGO'}
        channelImage={'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/800px-Delhi_Capitals_Logo.svg.png'}
        channel={'DC'}
        image={'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/02/15/1014773-capitalsquadipl.jpg'}
         />

<VideoCard
        title={'KGF-2-Full movie'}
        views={'12.3m Views'}
        timestamp={'3 DAYS AGO'}
        channelImage={'https://upload.wikimedia.org/wikipedia/commons/5/58/Honevale_Films.jpg'}
        channel={'HOMBALE-FILMS'}
        image={'https://static.toiimg.com/photo/msid-91093847/91093847.jpg?107968'}
         />

        <VideoCard
        title={'U MUMBA Final'}
        views={'1m Views'}
        timestamp={'1 DAYS AGO'}
        channelImage={'https://bsmedia.business-standard.com/_media/bs/img/about-page/1563515796.jpg'}
        channel={'MUMBA'}
        image={'https://i0.wp.com/usports.in/wp-content/uploads/2022/07/About-us-revised-1.jpg?fit=1500%2C844&ssl=1'}
         />
        <VideoCard
        title={'Jaipur Final'}
        views={'2m Views'}
        timestamp={'5 DAYS AGO'}
        channelImage={'https://www.mykhel.com/img/2022/10/jaipur-pink-panthers-1659449593-1665050649.jpg'}
        channel={'PANTHERS'}
        image={'https://staticg.sportskeeda.com/wp-content/uploads/2015/06/pinkwin-1434874000-800.jpg'}
         />
         <VideoCard
        title={'Patna Pirates final'}
        views={'1.6m Views'}
        timestamp={'16 DAYS AGO'}
        channelImage={'https://bsmedia.business-standard.com/_media/bs/img/about-page/1563526955.jpg'}
        channel={'PIRATES'}
        image={'https://www.patnabeats.com/wp-content/uploads/2016/07/DSC_8470f.jpg'}
         />
          <VideoCard
        title={'Bengaluru bulls final'}
        views={'1m Views'}
        timestamp={'17 DAYS AGO'}
        channelImage={'https://cdn.shopify.com/s/files/1/1612/0223/collections/Bulls_6bbecf5b-fb73-4ab5-8510-0cecd172f2a4.jpg?v=1570866788'}
        channel={'BULLS'}
        image={'https://thebridge.in/h-upload/2021/12/11/20054-bengaluru-bulls-team-photo.webp'}
         />
        

      </div>

    </div>
  )
}

export default RecommendedVideos