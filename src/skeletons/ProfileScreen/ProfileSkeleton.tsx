import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function ProfileSkeleton() {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item width={100} height={100} borderRadius={100} />
    </SkeletonPlaceholder>
  );
}

export default ProfileSkeleton;
