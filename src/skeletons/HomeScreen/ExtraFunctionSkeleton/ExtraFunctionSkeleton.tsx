import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function ExtraFunctionSkeleton() {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        justifyContent="space-between">
        <SkeletonPlaceholder.Item width={100} height={60} borderRadius={5} />
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width={60} height={60} />
          <SkeletonPlaceholder.Item marginLeft={6} width={60} height={60} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}

export default ExtraFunctionSkeleton;
