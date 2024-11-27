import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function ExtraFunctionSkeleton() {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item
        paddingHorizontal={10}
        flexDirection="row"
        justifyContent="space-between">
        <SkeletonPlaceholder.Item width={130} height={50} />
        <SkeletonPlaceholder.Item flexDirection="row">
          <SkeletonPlaceholder.Item width={50} height={50} />
          <SkeletonPlaceholder.Item marginLeft={10} width={50} height={50} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}

export default ExtraFunctionSkeleton;
