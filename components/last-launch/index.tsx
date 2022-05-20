import { useLaunchLatestQuery } from '../../schema/generated/graphql'

const LastLaunch = () => {
  const { data } = useLaunchLatestQuery()

  return <div>{data.launchLatest.mission_name}</div>
}

export default LastLaunch
