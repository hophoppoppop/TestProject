import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function BenefitSkeleton() {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item paddingVertical={10} alignItems="center">
        <SkeletonPlaceholder.Item width={70} height={70} borderRadius={70} />
        <SkeletonPlaceholder.Item flexDirection="row" marginTop={20}>
          <SkeletonPlaceholder.Item width={'25%'} height={50} />
          <SkeletonPlaceholder.Item
            width={'25%'}
            marginHorizontal={20}
            height={50}
          />
          <SkeletonPlaceholder.Item width={'25%'} height={50} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}

export default BenefitSkeleton;
