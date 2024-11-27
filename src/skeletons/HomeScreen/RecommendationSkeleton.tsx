import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function RecommendationSkeleton() {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item paddingHorizontal={10} flexDirection="row">
        <SkeletonPlaceholder.Item width={200} height={120} marginRight={10} />
        <SkeletonPlaceholder.Item width={200} height={120} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}

export default RecommendationSkeleton;
