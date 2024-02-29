import { UserLemonCoders } from "./list.interface";

export const mapAssetProps = (data: any) => {
  return data?.map((item: any) => {
    return {
      avatar_url: item.avatar_url,
      events_url: item.events_url,
      followers_url: item.followers_url,
      following_url: item.following_url,
      gists_url: item.gists_url,
      gravatar_id: item.gravatar_id,
      html_url: item.html_url,
      id: item.number,
      login: item.login,
      node_id: item.node_id,
      organizations_url: item.organizations_url,
      received_events_url: item.received_events_url,
      repos_url: item.repos_url,
      site_admin: item.site_admin,
      starred_url: item.starred_url,
      subscriptions_url: item.subscriptions_url,
      type: item.type,
      url: item.url,
    } as UserLemonCoders;
  });
};
