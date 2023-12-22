import React from 'react';
import './ExploreGroups.css';
function ExploreGroups() {
  const groups = [
    {
      id: 1,
      name: 'All in the Mind',
      type: 'Private Group',
      members: '32k',
      postsPerDay: '20',
      backgroundImage: '/C1.png',
      avatar: '/M.png'
    },
    {
      id: 2,
      name: 'Beauty queens',
      type: 'Public Group',
      members: '23k',
      postsPerDay: '12',
      backgroundImage: '/C2.png',
      avatar: '/Z.png'
    },
    {
      id: 3,
      name: 'Eternal triangle',
      type: 'Public Group',
      members: '45k',
      postsPerDay: '16',
      backgroundImage: 'V.jpg',
      avatar: 'N.png'
    }
  ];

  return (
    <div className="explore-groups">
      <h1>Explore Groups</h1>
      <div className="groups-grid">
        {groups.map(group => (
          <div key={group.id} className="group-card" style={{ backgroundImage: `url(${group.backgroundImage})` }}>
            <div className="group-content">
              <img src={group.avatar} alt={`${group.name}`} className="group-avatar" />
              <h3 className="group-name">{group.name}</h3>
              <div className="group-type">{group.type}</div>
              <div className="group-stats">
                <span className="group-members">{group.members} Members</span>
                <span className="group-posts">{group.postsPerDay} Post per day</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreGroups;
